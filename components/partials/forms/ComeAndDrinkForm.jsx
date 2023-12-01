import FormField from "@/components/forms/FormField";
import { Fragment, useState } from "react";
import { formSubmit, isError, RenderCaptcha } from "@/lib/services/formService";
import formStore from "@/lib/store/formStore";
import globalState from "@/lib/store/globalState";
import CustomIcon from "@/components/svg-custom/CustomIcon";
export default function ContactForm({ form }) {
  const formData = formStore((state) => state);
  const captcha = globalState((state) => state.captcha);
  const sections = form?.fields?.blueprint?.schema?.sections || [];
  const [errors, setErrors] = useState([]);
  const findClass = (field) => {
    switch (field) {
      case "name":
      case "venue":
      case "date":
      case "time":
      case "no_guests":
        return "bg-[#F2F9FE] border border-[#D9D9D9] h-[40px] text-main-blue w-[100%]";
      case "message":
      // return "w-full rounded-[5px] border-[1px] border-[#C9AAE1] py-[8.5px] px-3 min-h-[100px] ";
      case "file":
        return "";
      case "multi_select":
      case "single_select":
        return "react-select cursor-pointer border-[1px] rounded-[5px] h-[35px] pt-[1px] text-sm";
      case "radio_list":
        return "cursor-pointer";
      default:
        return "border outline-0 border-[#C9AAE1] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]";
    }
  };
  const findWrapperClass = (field) => {
    switch (field) {
      case "message":
      case "name":
      case "venue":
        return "";
      case "radio_list":
        return "flex flex-col";
      default:
        return "";
    }
  };
  const [token, setToken] = useState();
  return (
    <>
      {sections.map((section) => {
        const fields = section?.fields || [];
        return (
          <Fragment key={section?.state_name}>
            <form
              onSubmit={(e) =>
                formSubmit({
                  e,
                  formId: form.id,
                  setToken,
                  token,
                  captcha,
                  sections,
                  setErrors,
                  formData,
                })
              }
            >
              <div className="text-sm grid grid-cols-1">
                {fields.slice(0, 2).map((field) => (
                  <Fragment key={field?.state_name}>
                    <FormField
                      {...field}
                      className={findClass(field?.state_name)}
                      wrapperclassname={findWrapperClass(field?.state_name)}
                      error={isError(
                        errors,
                        section?.state_name,
                        field?.state_name
                      )}
                    />
                  </Fragment>
                ))}
              </div>
              <div className="text-sm grid grid-cols-1 md:grid-cols-3 gap-[15px]">
                {fields.slice(2, 5).map((field) => (
                  <Fragment key={field?.state_name}>
                    <FormField
                      {...field}
                      className={findClass(field?.state_name)}
                      wrapperclassname={findWrapperClass(field?.state_name)}
                      error={isError(
                        errors,
                        section?.state_name,
                        field?.state_name
                      )}
                    />
                  </Fragment>
                ))}
              </div>
              {form?.attributes?.uses_captcha && (
                <RenderCaptcha setToken={setToken} />
              )}
              <div className="flex justify-end mt-[20px]">
                <button
                  disabled={formData.uploading || formData.submitLoading}
                  className={`${
                    !formData.uploading && !formData.submitLoading
                      ? "cursor-pointer bg-main-blue hover:bg-main-cyan hover:text-main-blue transition-all duration-300"
                      : "cursor-not-allowed bg-[#ada5c9]"
                  } uppercase  text-white text-[14px] leading-[20px] font-bold py-[14px] px-[30px] gap-[20px] flex justify-center items-center`}
                >
                  Reserve Now
                  <CustomIcon iconType="greaterThan" />
                </button>
              </div>
            </form>
          </Fragment>
        );
      })}
    </>
  );
}
