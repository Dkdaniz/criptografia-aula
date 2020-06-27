execute = async () => {
  let text = [
    { key: "D", value: "D" },
    { key: "a", value: "a" },
    { key: "n", value: "n" },
    { key: "i", value: "i" },
    { key: "e", value: "e" },
    { key: "l", value: "l" },
    { key: "M", value: "M" },
    { key: "a", value: "a" },
    { key: "r", value: "r" },
    { key: "q", value: "q" },
    { key: "u", value: "u" },
    { key: "e", value: "e" },
    { key: "s", value: "s" },
  ];

  let secredo = [
    { key: "D", value: "1" },
    { key: "a", value: "2" },
    { key: "n", value: "3" },
    { key: "i", value: "4" },
    { key: "e", value: "5" },
    { key: "l", value: "6" },
    { key: "M", value: "7" },
    { key: "r", value: "8" },
    { key: "q", value: "9" },
    { key: "u", value: "10" },
    { key: "s", value: "11" },
  ];

  const encrypted = text.map((value) => {
    const secrect = secredo.filter((element) => {
      if (value.key === element.key) {
        return element;
      }
    });

    return {key: secrect[0].value };
  });



  const decrypted = encrypted.map((value) => {
    const secrect = secredo.filter((element) => {
      if (value.key === element.value) {
        return element.key;
      }
    });

    return { key: secrect[0].key };
  });

  console.log(encrypted);
  console.log(decrypted);
    
};

execute()