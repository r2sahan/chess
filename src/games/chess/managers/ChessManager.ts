import { GamePlayeManager } from "@/types/GamePlayeManager";
import { InitialGamePlays, PotentialGamePlays } from "../configs/GamePlays";
import { ChessBoard } from "../types/ChessBoard";

export class ChessManager implements GamePlayeManager {
  private selectedPiece = "";
  private selectedCell = "";
  private board!: ChessBoard;
  eliminatedPieces: string[] = [];
  logs: string[] = [];

  constructor(isFirstUser: boolean) {
    this.board = isFirstUser
      ? { ...InitialGamePlays }
      : { ...PotentialGamePlays };
  }

  getPiece(cell: string) {
    return this.board[cell];
  }

  isSelected(cell: string) {
    return this.selectedCell === cell;
  }

  private getPieceColor(piece: string) {
    return piece.split("_")[0];
  }

  private selectPiece(piece: string, cell: string) {
    this.selectedPiece = piece;
    this.selectedCell = cell;
  }

  private movePiece(cell: string) {
    const log = `${this.selectedPiece}: ${this.selectedCell} > ${cell}`;
    this.logs = [log, ...this.logs];
    this.board[cell] = this.selectedPiece;
    this.board[this.selectedCell] = "";
    this.selectedPiece = "";
    this.selectedCell = "";
  }

  private eliminatePiece(piece: string) {
    const log = `${piece} eliminated`;
    this.logs = [log, ...this.logs];
    this.eliminatedPieces = [piece, ...this.eliminatedPieces];
  }

  move(piece: string, cell: string) {
    if (piece) {
      if (this.selectedPiece) {
        const pieceColor = this.getPieceColor(piece);
        const selectedPieceColor = this.getPieceColor(this.selectedPiece);
        if (selectedPieceColor !== pieceColor) {
          this.movePiece(cell);
          this.eliminatePiece(piece);
          return;
        }
      }
      this.selectPiece(piece, cell);
      return;
    }
    if (this.selectedPiece) {
      this.movePiece(cell);
    }
  }

  get currentBoard() {
    return this.board;
  }
}
