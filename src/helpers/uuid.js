export default function createUUID() {
  let dayTimeHeadUUID = new Date().getTime();

  return "xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (charsSet) => {
    let random = (dayTimeHeadUUID + Math.random() * 16) % 16 | 0;
    dayTimeHeadUUID = Math.floor(dayTimeHeadUUID / 16);
    return (charsSet == "x" ? random : (random & 0x3) | 0x8).toString(16);
  });
}


