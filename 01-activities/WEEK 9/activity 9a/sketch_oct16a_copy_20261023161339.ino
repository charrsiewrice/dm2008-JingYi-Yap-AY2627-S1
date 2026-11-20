// DM2008 — Activity 9a
// Mapping Sensors (30 min)
//
// Adjust and refine until the response feels smooth and natural.

const int usSensorPin = A0;
const float usMaxRange = 520.0;
const float dataSize = 1023.0;

// TODO: declare your LED pin here (must be a PWM pin, marked with ~)
const int ledPin = 9;

float sensorVal, distVal;
int brightness = 0;

void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN,OUTPUT);
  // TODO: set up your LED pin here (hint: pinMode)
}

void loop() {
  sensorVal = analogRead(usSensorPin);
  distVal = sensorVal * usMaxRange / dataSize;

  // Clamp to a range that suits a desk / classroom setup (cm)
  if (distVal 