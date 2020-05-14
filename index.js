import nacl from './nacl-fast'
import * as util from './nacl-util'

let naclOBJ = {};

nacl(naclOBJ);

naclOBJ.util = util

export default naclOBJ;
