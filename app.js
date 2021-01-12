const express = require('express');
const app = express();
const mongoose = require('mongoose');
const listRoutes = require('./routes/lists');
const port = 3000;

mongoose
   .connect('mongodb://localhost/nfa-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
   })
   .then(() => {
      console.log('DB Connected');
   })
   .catch(() => {
      console.log('DB Error');
   });
app.use(express.json());
app.use('/lists', listRoutes);

app.listen(port, () => {
   console.log(`Listening on port: ${port}`);
});
