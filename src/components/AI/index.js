import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useCurrentCharacter } from "../hooks";
import { controlAI } from "../../redux/actions";

export default function AI() {
  const dispatch = useDispatch();
  const character = useCurrentCharacter();

  useEffect(() => {
    if (character.enemy) dispatch(dispatch(controlAI));
  }, [character, dispatch]);
}
