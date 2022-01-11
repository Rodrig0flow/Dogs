import React from "react";
import { Link } from "./Card";

export default function Home() {
    const dispach = useDispach();
    const allDogs = useSelector((state) => state.dogs.length);
    const allTemperaments = useSelector((state) => state.temperaments);
}