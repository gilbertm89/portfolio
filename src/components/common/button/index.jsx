import { useTranslation } from "react-i18next";

export const Button = ({ icon, label, ...otherProps }) => {
  const { t } = useTranslation();

  return (
    <button
      className="border border-indigo-500 rounded hover:shadow-2xl hover:shadow-indigo-500 w-full py-4 px-5 relative"
      {...otherProps}
    >
      <div className="flex justify-center items-center gap-x-3">
        <div className="w-6 h-6 fill-indigo-500">{icon}</div>
        <span className="text-lg text-[#24292f]">{t(label)}</span>
      </div>
    </button>
  );
};
