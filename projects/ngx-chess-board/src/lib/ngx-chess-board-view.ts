import { HistoryMove } from './history-move-provider/history-move';
import { ColorInput, PieceTypeInput } from './utils/inputs/piece-type-input';

export interface NgxChessBoardView {
    reset(): void;

    reverse(): void;

    undo(): void;

    getMoveHistory(): HistoryMove[];

    setFEN(fen: string): void;

    move(coords: string): void;

    getFEN(): string;

    setPGN(pgn: string): void;

    addPiece(pieceTypeInput: PieceTypeInput, colorInput: ColorInput, coords: string): void;

    addArrow(coords: string, color: string): void;

    removeArrow(coords: string): void;

    addCircle(coords: string, color: string): void;

    removeCircle(coords: string): void;
}
