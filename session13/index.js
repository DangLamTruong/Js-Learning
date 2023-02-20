const example1 = new Promise((resolve, reject) => {
    const result = {
      status: 'fulfilled',
      message: 'Done',
    };
    const error = {
      status: 'rejected',
      message: 'Failed',
    };
    const isJavaScriptEasy = true;
    if (isJavaScriptEasy) resolve(result)
    else reject(error);
  });
  example1

  .then((res) => {

    console.log('then', res);

  })

  .catch((err) => {

    console.log('catch', err);
  })

  .finally((res) => {

    console.log('finally', res);
  });