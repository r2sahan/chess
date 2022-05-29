export type BoardRowType = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
export type BoardColumnType = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
export type BoardCellType = `${BoardColumnType}${BoardRowType}`;
export type ChessBoardMap = { [key in string]: string };
