// Brute Force

// howManySeconds()
// los ms que tardó la máquina en adivinar mi contraseña

function howManySeconds(password) {
  let tryPassword = null;

  for (let i = 1111; i < 9999; i++) {
    if (password === i) {
      tryPassword = i;
      break;
    }
  }

  if (tryPassword) {
    console.log(`Your password is ${tryPassword}`);
    return;
  }

  console.error("Cannot decode password");
}

howManySeconds("8922");
