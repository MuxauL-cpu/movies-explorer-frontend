function durationConvert(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return hours ? `${hours}ч ${minutes}м` : `${minutes}м`
}
  
export default durationConvert;