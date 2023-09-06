import "./App.css";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";

interface IProps {
  title: string;
  description: string;
  barText?: string;
  logo?: string;
  pageTitle?: string;
  notificationTitle?: string;
  notificationDescription?: string;
  code?: string;
  discountRules?: string;
  buttonText?: string;
  buttonLink?: string;
}

function App({
  title,
  description,
  barText,
  buttonLink,
  buttonText,
  code,
  discountRules,
  logo,
  notificationDescription,
  notificationTitle,
  pageTitle,
}: IProps) {
  return (
    <div className="App">
      <Screen1 title={title} description={description} />
      <Screen2
        barText={barText}
        logo={logo}
        pageTitle={pageTitle}
        notificationTitle={notificationTitle}
        notificationDescription={notificationDescription}
        code={code}
        discountRules={discountRules}
        buttonText={buttonText}
        buttonLink={buttonLink}
      />
    </div>
  );
}

export default App;
