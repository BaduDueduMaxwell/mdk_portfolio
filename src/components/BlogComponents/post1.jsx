import React from "react";
import { motion } from "framer-motion";

export default function Post1() {
  return (
    <div>
      <div className="px-2">
        <div className="flex -mx-2">
          <motion.div
            className="w-full sm:w-1/2 p-5"
            whileHover={{ scale: 1.1 }}
          >
            <div className="sm:h-100">
              <a href="https://medium.com/@duedumaxwell43/understanding-python-if-and-else-statements-a-comprehensive-guide-efcc566e6cc0">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0qa5w1wa0_L6tfoeA3tVPQ.jpeg"
                  alt=""
                />

                <h5 className="text-lg font-semibold p-5">
                  Understanding Python🐍 If and Else Statements: A Comprehensive
                  Guide
                </h5>
              </a>
            </div>
          </motion.div>
          <div className="w-full sm:w-1/2 p-5">
            <motion.div className="sm:h-100" whileHover={{ scale: 1.1 }}>
              <a href="https://medium.com/@duedumaxwell43/python-common-errors-part-1-c1e5a03c67d8">
                <img
                  src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fHww"
                  alt=""
                />

                <h5 className="text-lg  font-semibold p-5">
                  Python Common Errors…(Part 1)
                </h5>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
