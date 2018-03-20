// https://stackoverflow.com/questions/45053964/in-vue-js-how-do-i-write-custom-filters-in-separate-file-and-use-them-in-various
export default function(value){
  return value.slice(0,99)+'...';
}
