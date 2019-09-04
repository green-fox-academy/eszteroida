'use strict';

const routes = require('./routes');
const port = 3030;

routes.listen(port, () => {
  console.log(`Server running on port ${port}`);
});