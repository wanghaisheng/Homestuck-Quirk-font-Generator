import Quirk from "quirks/Quirk";
import { alterniaTag } from "quirks/canon/database/Tags";

export const eridanColor = "#6A006A";

export default class Eridan extends Quirk {
    public constructor() {
        super("Eridan Ampora", alterniaTag, eridanColor);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("w", "ww");
        this.replaceString("v", "vv");
    }
}