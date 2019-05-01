// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 

function DNAStrand(dna){
    // make empty string
    let newText = '';
    // for loop based off the dna length
    for (let i = 0; i < dna.length; i++){
    // if the letter matches A, add letter T to newText
      if(dna[i] === 'A'){
      newText += 'T'};
    // if the letter matches T, add letter A to newText 
      if(dna[i] === 'T'){
      newText += 'A'};
    // if the letter matches C, add letter G to newText
      if(dna[i] === 'C'){
      newText += 'G'};
    // if the letter matches G, add letter C to newText 
      if(dna[i] === 'G'){
      newText += 'C'};
    }
    return newText;
  }