import React, { useContext } from "react";
import Spacer from "./Spacer";

const Home: React.FC = () => {
  return (
    <div className="container mt-4">
      <h3>Welcome to Fix Your Diet - <small>Your Personalized Health Hub!</small></h3>
      <Spacer />
      <p className="text-left">
        Your journey to a healthier, more vibrant life begins here. We
        understand that achieving your wellness goals is a highly individualized
        process. That's why we've created a unique platform that empowers you to
        take charge of your health like never before.{" "}
      </p>
      <p className="text-left">
        Imagine having a place where your medical and physical data converge to
        create a holistic picture of your well-being. A place where science,
        technology, and the expertise of dedicated dietitians come together to
        craft a custom-tailored diet plan designed exclusively for you,
        considering your unique dietary requirements.
      </p>
      <p className="text-left">
        At FYD, we're revolutionizing the way you approach
        health and nutrition. Our mission is to make personalized wellness
        accessible to all, guiding you on your path to optimal health, one data
        point at a time. Welcome to a future where your health is in your hands,
        but you're never alone on your journey.
      </p>
    </div>
  );
};

export default Home;
