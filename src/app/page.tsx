import useTranslation from "next-translate/useTranslation";
import LocaleSwitcher from "../components/LocaleSwitcher";
export default function Home() {
  const { t, lang } = useTranslation("common");

  return (
    <div className="">
      <h1 className="text-4xl font-bold">
        {t("farewell")} {lang}
      </h1>
      <div className="fixed bottom-4 right-10">
        {" "}
        <LocaleSwitcher />
      </div>
    </div>
  );
}
