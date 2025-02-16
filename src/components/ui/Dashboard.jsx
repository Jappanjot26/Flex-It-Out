import { Link } from "react-router-dom";
import Card from "./Card";
const excercises = [
  {
    name: "PushUp",
    img: "https://static.vecteezy.com/system/resources/previews/002/204/285/large_2x/a-man-is-doing-a-push-up-hand-drawn-style-design-illustrations-vector.jpg",
    description:
      "A basic upper body exercise that targets the chest, shoulders, and triceps.",
  },
  {
    name: "Squat",
    img: "https://wegetfitathome.com/wp-content/uploads/2022/05/Strengthen-Bones-with-Exercise.png",
    description:
      "A lower body exercise that targets the thighs, hips, and buttocks.",
  },
  {
    name: "Crunch",
    img: "https://static.vecteezy.com/system/resources/previews/004/234/172/non_2x/tummy-exercise-concepts-vector.jpg",
    description:
      "An abdominal exercise that targets the rectus abdominis muscle.",
  },
  {
    name: "PushUp",
    img: "https://static.vecteezy.com/system/resources/previews/002/204/285/large_2x/a-man-is-doing-a-push-up-hand-drawn-style-design-illustrations-vector.jpg",
    description:
      "A basic upper body exercise that targets the chest, shoulders, and triceps.",
  },
  {
    name: "Squat",
    img: "https://wegetfitathome.com/wp-content/uploads/2022/05/Strengthen-Bones-with-Exercise.png",
    description:
      "A lower body exercise that targets the thighs, hips, and buttocks.",
  },
  {
    name: "Crunch",
    img: "https://static.vecteezy.com/system/resources/previews/004/234/172/non_2x/tummy-exercise-concepts-vector.jpg",
    description:
      "An abdominal exercise that targets the rectus abdominis muscle.",
  },
  {
    name: "PushUp",
    img: "https://static.vecteezy.com/system/resources/previews/002/204/285/large_2x/a-man-is-doing-a-push-up-hand-drawn-style-design-illustrations-vector.jpg",
    description:
      "A basic upper body exercise that targets the chest, shoulders, and triceps.",
  },
  {
    name: "Squat",
    img: "https://wegetfitathome.com/wp-content/uploads/2022/05/Strengthen-Bones-with-Exercise.png",
    description:
      "A lower body exercise that targets the thighs, hips, and buttocks.",
  },
  {
    name: "Crunch",
    img: "https://static.vecteezy.com/system/resources/previews/004/234/172/non_2x/tummy-exercise-concepts-vector.jpg",
    description:
      "An abdominal exercise that targets the rectus abdominis muscle.",
  },
  {
    name: "PushUp",
    img: "https://static.vecteezy.com/system/resources/previews/002/204/285/large_2x/a-man-is-doing-a-push-up-hand-drawn-style-design-illustrations-vector.jpg",
    description:
      "A basic upper body exercise that targets the chest, shoulders, and triceps.",
  },
  {
    name: "Squat",
    img: "https://wegetfitathome.com/wp-content/uploads/2022/05/Strengthen-Bones-with-Exercise.png",
    description:
      "A lower body exercise that targets the thighs, hips, and buttocks.",
  },
  {
    name: "Crunch",
    img: "https://static.vecteezy.com/system/resources/previews/004/234/172/non_2x/tummy-exercise-concepts-vector.jpg",
    description:
      "An abdominal exercise that targets the rectus abdominis muscle.",
  },
];
function Dashboard() {
  return (
    <div className="h-full bg-background flex gap-6 items-center px-10 flex-wrap overflow-scroll py-14 justify-center">
      {excercises.map((ex) => (
        <Card excercise={ex} />
      ))}
    </div>
  );
}

export default Dashboard;
