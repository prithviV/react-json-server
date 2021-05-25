// import DisplayAttributes from './DisplayAttributes';
import ClayButton from '@clayui/button';
// import Axios from '../service/api';
import { useEffect, useState } from 'react';

function Attributes({
  selectedAttributes,
}) {
  const availableAttributes = {
    attrType: {
      label: 'Type',
      maxLength: 10,
    },
    attrRnd: {
      label: 'R & D',
      maxLength: 1,
    }
  };
  const [attributeState, setAttributeState] = useState({});
  const initialState = selectedAttributes && selectedAttributes.reduce((accumulator, attrLoaded) => {
    const item = {
      id: attrLoaded.id,
      value: attrLoaded.value
    };
    if(accumulator[attrLoaded.attrId]) {
      accumulator[attrLoaded.attrId].items.push(item);
    } else {
      accumulator[attrLoaded.attrId] = {
        disabled: false,
        value: attrLoaded.value,
        items: [item]
      };
    }
    return accumulator;
  }, {});

  const addAttribute = (id) => {
    const existingValue  = attributeState[id] || {};
    const disabled = (( existingValue.items?.length || 0 ) >= availableAttributes[id].maxLength - 1) || false;
    const items = existingValue.items || [];
    setAttributeState({
      ...attributeState,
      [id]: {
        ...existingValue,
        disabled,
        items: [...items , 'asdfsf'],
      }
    })
  }
  return <div>
      <div>
        {Object.keys(availableAttributes).map( (attr, i) => {
          return <ClayButton
            key={i}
            className="c-m-sm-1"
            onClick={() => {addAttribute(attr)}}
            disabled={attributeState && attributeState[attr]?.disabled}
          >
            { availableAttributes[attr].label }
          </ClayButton>
        })}
          {/* {availableAttributes.map((attr, i) => {
              return <ClayButton disabled={ 
                      attributeState[attr.id] && attributeState[attr.id].disabled
                  }
                  key={i} className="c-m-sm-1" onClick={() => {addAttribute(attr.id)}}
              >
                  { attr.label }
              </ClayButton>
          })} */}
      </div>
      { JSON.stringify(attributeState) }
      {/* <DisplayAttributes
          attributesList={ attributes }
      ></DisplayAttributes> */}
      
  </div>
}

export default Attributes;