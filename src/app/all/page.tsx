import useTranslation from "next-translate/useTranslation";
export default function AllItems() {
  const { t, lang } = useTranslation("common");
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">
        {t("greeting")} {lang}
      </h1>
    </div>
  );
}
