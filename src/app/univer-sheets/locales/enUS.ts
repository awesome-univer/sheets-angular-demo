
// https://univer.ai/guides/sheet/getting-started/i18n

import DesignEnUS from '@univerjs/design/lib/locale/en-US.json';
import UIEnUS from '@univerjs/ui/lib/locale/en-US.json';
import DocsUIEnUS from '@univerjs/docs-ui/lib/locale/en-US.json';
import SheetsEnUS from '@univerjs/sheets/lib/locale/en-US.json';
import SheetsUIEnUS from '@univerjs/sheets-ui/lib/locale/en-US.json';
import SheetsFormulaUIEnUS from '@univerjs/sheets-formula-ui/lib/locale/en-US.json';
import { Tools } from '@univerjs/core';

export default Tools.deepMerge(
    SheetsEnUS,
    DocsUIEnUS,
    SheetsUIEnUS,
    SheetsFormulaUIEnUS,
    UIEnUS,
    DesignEnUS,
)
