import useTranslation from "next-translate/useTranslation";
export default function About() {
  const { t, lang } = useTranslation("about");
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">
        {t("greeting")} {lang}
      </h1>
      <h2>THIS IS THE ABOUT PAGE</h2>
    </div>
  );
}
