function solution(order) {
   return  String(order).split("").filter(clap => ["3","6","9"].includes(clap)).length
}