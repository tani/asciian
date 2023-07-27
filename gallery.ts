type Griph = string[];

function render(filename: string) {
  const griphs = [];
  const text = Deno.readTextFileSync(filename);
  let griph = [] as Griph;
  let skip = 1;
  for (const line of text.split("\n")) {
    if (skip > 0) {
      if (line.length === 0) {
        skip--;
      }
      continue;
    }
    if (line.length === 0) {
      griphs.push(griph);
      griph = [];
      continue;
    }
    griph.push(line);
  }

  let i = 0;
  const height = griphs[0].length;
  while (i < griphs.length) {
    const fourGriphs = griphs.slice(i, i + 4);
    for (let j = 0; j < height; j++) {
      let line = "";
      for (const griph of fourGriphs) {
        line += griph[j] + " ";
      }
      console.log(line);
    }
    i += 4;
    console.log();
  }
}

render("asciian_8_16.txt");
render("asciian_9_15.txt");
