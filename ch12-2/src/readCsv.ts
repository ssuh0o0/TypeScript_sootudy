import {getFileNameAndNumber} from './utils'
import {csvFileReaderGenerator} from './csv/csvFileReaderGenerator'

const [filename] = getFileNameAndNumber('./data/fake-100000.csv', 1)

let line = 1
for(let object of csvFileReaderGenerator(filename)) {
  console.log(`[${line++}] ${JSON.stringify(object)}`)
}
console.log('\n read complete.')

//  ts-node src\readCsv.ts
/*
[4942] {"name":"zog rew apme."}
[4943] {"name":"Evelyn Parks","email":"vo@purerus.uk","profession":"Customer Service Manager","birthday":"Mon Jun 26 1972 16:52:02 GMT+0900 (대한민국 표준시)","sentence":"Purfitan lah ewuto el mifu niknor tajimu kevdez sujcunam jaim cukocem zoru."}
[4944] {"name":"cukocem zoru."}
[4945] {"name":"Julian Terry","email":"wu@ami.in","profession":"Marketing Director","birthday":"Thu Jun 10 1982 06:33:22 GMT+0900 (대한민국 표준시)","sentence":"Busi ema decjaz zezvulhe cunli kemmil oj bu eh nifuw isoka esmosa."}
[4946] {"name":"isoka esmosa."}
[4947] {"name":"Lilly Castillo","email":"pumece@imenwok.br","profession":"Physician Assistant","birthday":"Tue Dec 14 1993 21:23:52 GMT+0900 (대한민국 표준시)","sentence":"Vo sahu juhefeg bero sitmaw geliuci vazip mol pienon zumufig sobme amjarfa bit."}
[4948] {"name":"amjarfa bit."}
[4949] {"name":"Harold McCarthy","email":"matdite@dazib.st","profession":"City Manager","birthday":"Thu Jan 14 1988 19:53:58 GMT+0900 (대한민국 표준시)","sentence":"Gufeti wo zodo digvev uho zidbo wewompeh pahke ufeesaruc baod ogrerfa ibigub atuajiab."}
[4950] {"name":"gub atuajiab."}
[4951] {"name":"Walter Gonzales","email":"ga@ge.ao","profession":"Managing Partner","birthday":"Wed Mar 26 2003 06:20:06 GMT+0900 (대한민국 표준시)","sentence":"Gomuphe suzjudag tok muftihe numeb zujavli zunicfer um tefa du sufzazkin tonahiro bufisapu dilunmo feize nijvatsal lahzi osorurew."}
[4952] {"name":"hzi osorurew."}
*/