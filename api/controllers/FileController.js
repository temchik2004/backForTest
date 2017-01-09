/**
 * FileController
 *
 * @description :: Server-side logic for managing Files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `FileController.upload()`
   *
   * Upload file(s) to the server's disk.
   */
  upload: function (req, res) {

    // e.g.
    // 0 => infinite
    // 240000 => 4 minutes (240,000 miliseconds)
    // etc.
    //
    // Node defaults to 2 minutes.
    res.setTimeout(0);

    req.file('avatar')
      .upload({

        // You can apply a file upload limit (in bytes)
        maxBytes: 1000000

      }, function whenDone(err, uploadedFiles) {
        if (err) return res.serverError(err);
        else return res.json({
          files: uploadedFiles,
          textParams: req.allParams()
        });
      });
  }

};

