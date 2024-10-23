import LocaleSwitcher from "@/components/LocaleSwitcher";
import useTranslation from "next-translate/useTranslation";
const data = { name: "test", age: 20 };
export default function AllItems() {
  const { t, lang } = useTranslation("common");

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">
        {t(data.name)} {lang}
      </h1>
      <h2>added a message for the commit </h2>
      <div className="fixed bottom-10 right-10">
        <LocaleSwitcher />
      </div>
    </div>
  );
}
