import axios from 'axios';

const URL = 'http://3.79.98.98:3000/'; // 🔁 Replace with your target URL
const INTERVAL_MINUTES = 10;
const DURATION_HOURS = 3;

const intervalMs = INTERVAL_MINUTES * 60 * 1000;
const totalRuns = (DURATION_HOURS * 60) / INTERVAL_MINUTES;

let runCount = 0;

const makeRequest = async () => {
  try {
    console.log(`[${new Date().toISOString()}] Sending request...`);
    const response = await axios.get(URL);
    console.log(`✅ Response Status: ${response.status}`);
    console.log(`✅ Response Status: ${response.data.toString()}`);
  } catch (error) {
    console.error(` Error on request:`);
  }

  runCount++;
  if (runCount >= totalRuns) {
    console.log(`🎉 Completed ${totalRuns} requests. Exiting...`);
    clearInterval(interval);
  }
};

console.log(`⏱ Starting HTTP request timer... Will run ${totalRuns} times every ${INTERVAL_MINUTES} minutes.`);

const interval = setInterval(makeRequest, intervalMs);
