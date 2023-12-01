const dotenv = require("dotenv");
const fs = require("fs");
const https = require("https");
const axios = require("axios").default;
const { Jsona } = require("jsona");
const dataFormatter = new Jsona();
module.exports.preBuildDevelopment = async () => {
  dotenv.config();
  // Convert the environment variables to a JSON object
  const envVars = {};
  for (const key in process.env) {
    envVars[key] = process.env[key];
  }

  // Form Setting
  const formSettingHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/settings/form"
  );
  const formSetting = dataFormatter.deserialize(formSettingHandler.data);

  // Global Data
  const tenantDetailsHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/globals/azure-global-details"
  );
  const tenantDetails = dataFormatter.deserialize(tenantDetailsHandler.data);

  // Menu Data
  const menusHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API +
      "/api/menus/azure-menu?include=nodes.children,parentNodes"
  );
  const menus = dataFormatter.deserialize(menusHandler.data);

  const footerNavigationHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API +
      "/api/menus/azure-footer-navigation?include=nodes.children,parentNodes"
  );
  const footerNavigation = dataFormatter.deserialize(footerNavigationHandler.data);

  const footerServicesHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API +
      "/api/menus/azure-footer-services?include=nodes.children,parentNodes"
  );
  const footerServices = dataFormatter.deserialize(footerServicesHandler.data);


  // Generate default Image
  const generateImage = (imageUrl, path) => {
    const file = fs.createWriteStream(path);
    https.get(imageUrl, function (response) {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log("Default Image Downloaded");
      });
    });
  };
  [].forEach((e, i) => {
    generateImage(e, `./public/image${i}.webp`);
  });

  fs.writeFileSync(
    "./lib/preBuildScripts/static/globalData.json",
    JSON.stringify({
      formSetting,
      tenantDetails,
      menus,
      footerNavigation,
      footerServices,
    })
  );

  console.log("New Global Data Generated!");
};
