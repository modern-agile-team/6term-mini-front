import React from "react";

export const getShowTime = (index) => {
    if (index === 0) return "07:00 ~ 09:00";
    if (index === 1) return "09:00 ~ 11:00";
    if (index === 2) return "11:00 ~ 13:00";
    if (index === 3) return "13:00 ~ 15:00";
    if (index === 4) return "15:00 ~ 17:00";
    if (index === 5) return "17:00 ~ 19:00";
    if (index === 6) return "19:00 ~ 21:00";
    if (index === 7) return "21:00 ~ 23:00";
};