// Full open-source React component available via npm
// https://www.npmjs.com/package/react-animated-counter
import React, {
	useState,
	useEffect,
	useRef
} from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as framerMotion from "https://cdn.skypack.dev/framer-motion@5.5.5";
const { motion } = framerMotion;

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const getBackgroundSize = (value) => {
  return { backgroundSize: `${(value * 100) / 1000}% 100%` };
};

const formatForDisplay = (number, includeDecimals) => {
  return parseFloat(Math.max(number, 0))
    .toFixed(includeDecimals ? 2 : 0)
    .split("")
    .reverse();
};

const DecimalColumn = ({ fontSize, color }) => {
  return (
    <div>
      <span
        style={{
          fontSize: fontSize,
          lineHeight: fontSize,
          color: color
        }}
      >
        .
      </span>
    </div>
  );
};

const NumberColumn = ({
  digit,
  delta,
  fontSize,
  color,
  incrementColor,
  decrementColor
}) => {
  const [position, setPosition] = useState(0);
  const [animationClass, setAnimationClass] = useState(null);
  const previousDigit = usePrevious(digit);
  const columnContainer = useRef();

  const setColumnToNumber = (number) => {
    setPosition(columnContainer.current.clientHeight * parseInt(number, 10));
  };

  useEffect(() => setAnimationClass(previousDigit !== digit ? delta : ""), [
    digit,
    delta
  ]);

  useEffect(() => setColumnToNumber(digit), [digit]);

  return (
    <div
      className="ticker-column-container"
      ref={columnContainer}
      style={{
        fontSize: fontSize,
        lineHeight: fontSize,
        color: color,
        height: "auto",
        "--increment-color": incrementColor,
        "--decrement-color": decrementColor
      }}
    >
      <motion.div
        animate={{ x: 0, y: position }}
        className={`ticker-column ${animationClass}`}
        onAnimationComplete={() => setAnimationClass("")}
      >
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
          <div key={num} className="ticker-digit">
            <span
              style={{
                fontSize: fontSize,
                lineHeight: fontSize,
                color: color,
              }}
            >
              {num}
            </span>
          </div>
        ))}
      </motion.div>
      <span className="number-placeholder">0</span>
    </div>
  );
};

// Counter component
const AnimatedCounter = ({
  value = 0,
  fontSize = "18px",
  color = "white",
  incrementColor = "#32cd32",
  decrementColor = "#fe6862",
  includeDecimals = false
}) => {
  const numArray = formatForDisplay(value, includeDecimals);
  const previousNumber = usePrevious(value);

  let delta = null;
  if (value > previousNumber) delta = "increase";
  if (value < previousNumber) delta = "decrease";

  return (
    <motion.div layout className="ticker-view">
      {numArray.map((number, index) =>
        number === "." ? (
          <DecimalColumn key={index} fontSize={fontSize} color={color} />
        ) : (
          <NumberColumn
            key={index}
            digit={number}
            delta={delta}
            fontSize={fontSize}
            incrementColor={incrementColor}
            decrementColor={decrementColor}
            includeDecimals={includeDecimals}
          />
        )
      )}
    </motion.div>
  );
};

// Main app component
const App = () => {
  const [counterValue, setCounterValue] = useState(500.00);
  return (
    <div className="App">
      <AnimatedCounter value={counterValue} fontSize='48px'/>
      <input
        type="range"
        min="1"
        max="999"
        onChange={(e) => setCounterValue(e.target.value)}
        step="0.01"
        style={getBackgroundSize(counterValue)}
        value={counterValue}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
