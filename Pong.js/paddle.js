const SPEED = 0.02;

export default class Paddle {
 constructor(paddle) {
  this.paddle = paddle;
  this.reset();
 }

 get position() {
  return parseFloat(getComputedStyle(this.paddle).getPropertyValue('--position'));
 }

 set position(y) {
  this.paddle.style.setProperty('--position', y);
 }

 rect() {
  return this.paddle.getBoundingClientRect();
 }

 reset() {
  this.position = 50;
 }

 update(delta, y) {
  this.position += SPEED * delta * (y - this.position);
 }
}