const fs = require('fs');
// const fakeData = require('./data.json')
const jsonData = require('./dataGenerator.js')

// let readableStream = fs.createReadStream("data.json");

var writeStream = fs.createWriteStream('./database/mongoose/dummyData.json');


function writeOneMillionTimes(writer, dataCB, encoding, loopTime, callback) {
    let i = loopTime;
    write();
    function write() {
      let ok = true;
      do {
        let data = JSON.stringify(dataCB(loopTime - i)).slice(1, -1)+','
        i--;

        if ( i % (loopTime/10) ===0) {
          console.log(`${100 - (i/(loopTime)*100)} % COMPLETED!!! Keep Writing....`)
        }

        if (i===loopTime-1){
            ok = writer.write('[' + data, encoding);
        } else if (i === 0) {
          // last time!
          writer.write(data.slice(0,data.length-1)+']', encoding, callback);
          console.log("Done Writing!!")
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        // had to stop early!
        // write some more once it drains
        writer.once('drain', write);
      }
    }
  }

  writeOneMillionTimes(writeStream, jsonData, "utf-8", 10000000)




