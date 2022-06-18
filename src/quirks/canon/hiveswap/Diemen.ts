import Quirk from "quirks/Quirk";
import { hiveswapTag } from "quirks/canon/Tags";

export const diemenColor = "#6F210E";

export default class Diemen extends Quirk {
    public constructor() {
        super("Diemen Xicali", hiveswapTag, diemenColor);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.prefix("(| ");
        this.suffix(" |)");
    }
}