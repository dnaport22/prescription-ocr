var config = {
  projectId: 'api-project-842067793938',
  keyFilename: 'keyfile.json'
};
// [START app]
// [START import_libraries]
var gcloud = require('gcloud')(config);
var vision = gcloud.vision();

function ocr() {
  vision.detectText('resources/my3.JPG', function(err, text, apiResponse) {
    console.log(text)
  });
}
ocr()
