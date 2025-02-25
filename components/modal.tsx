import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {children}
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
