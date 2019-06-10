const fs = require('fs');
// const fakeData = require('./data.json')
const {csvRow} = require('./dataGenerator.js')

// let readableStream = fs.createReadStream("data.json");

var writeStream = fs.createWriteStream('./database/dummyDataCSV.csv');


function writeOneMillionTimes(writer, dataCB, encoding, loopTime, callback) {
    let i = loopTime;
    write();
    function write() {
      let ok = true;
      do {
        let data = JSON.stringify(dataCB(loopTime - i)).slice(1,-1)
        i--;

        if ( i % (loopTime/10) ===0) {
          console.log(`${100 - (i/(loopTime)*100)} % COMPLETED!!! Keep Writing....`)
        }

        if (i===loopTime-1){
            // ok = writer.write('productname|imageurl|shoesizes|clothingsizes|designer|color|itemtype|description|price\n' + data + '\n', encoding);
            ok = writer.write( data + '\n', encoding);
        } else if (i === 0) {
          // last time!
          writer.write(data, encoding, callback);
          console.log("Done Writing!!")
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          ok = writer.write(data+'\n', encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        // had to stop early!
        // write some more once it drains
        writer.once('drain', write);
      }
    }
  }

  writeOneMillionTimes(writeStream, csvRow, "utf-8", 10000000)


//TRY IT (using pipe viewer to see the progress)
// pv /Users/calvin197/Desktop/more-looks-service-master/database/dummyDataCSV.csv | psql -c "COPY test2s FROM STDIN with (format csv, delimiter '|');"

//copy test2s from '/Users/calvin197/Desktop/more-looks-service-master/database/dummyDataCSV.csv' with (format csv, delimiter '|');