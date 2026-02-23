import en from "./messages/en";
import uz from "./messages/uz";
import ru from "./messages/ru";

export type Messages = typeof en;

export function getMessages(locale: string): Messages {
  switch (locale) {
    case "uz":
      return uz;
    case "ru":
      return ru;
    default:
      return en;
  }
}
