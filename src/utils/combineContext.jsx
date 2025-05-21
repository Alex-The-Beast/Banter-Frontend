/**
 * This function combines multiple context providers together and returns a single provider component
 */
export default function combineContext(...providers) {
  return ({ children }) => {
    return providers.reduceRight((accumulator, CurrentProvider) => {
      return <CurrentProvider>{accumulator}</CurrentProvider>;
    }, children);
  };
}

/**
  
 * <A>
 *   <B>
 *      <C>
 *         <D>
 *          {children}  here children is the original value.
 *         </D>
 *      </C>
 *   </B>
 * </A>
 * 
 */

/** <Combined>
 *   {children}
 *  </Combined>
 */
