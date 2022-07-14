export enum tableDataType {
  lifePremium = 1,
  lifeClaim = 2,
  notLifePremium = 3,
  notLifeClaim = 4,
}

export class TableMapper {
  static mapParsedData(tableType: tableDataType, parsedArray: Array<any>): Array<any> {
    switch(tableType) {
      case tableDataType.notLifePremium:
        return this._mapNotLifePremiumStruct(parsedArray);
      default:
        return [];
    }
  }

  private static _mapNotLifePremiumStruct(parsedArray: Array<any>): Array<any> {
    const res: Array<any> = [];

    const mapper = [
      undefined,
      {field: 'idx', type: 'number', required: false, validity: false},
      {field: 'policeNumber', type: 'number', required: false, validity: false},
      {field: 'branch', type: 'number', required: false, validity: false},
      {field: 'category', type: 'string', required: false, validity: false},
      {field: 'activity', type: 'string', required: false, validity: false},
      {field: 'dateEffective', type: 'date', required: false, validity: false},
      {field: 'dateDeadline', type: 'date', required: false, validity: false},
      {field: 'dateTransaction', type: 'date', required: false, validity: false},
      {field: 'subscriber', type: 'string', required: false, validity: false},
      {field: 'insured', type: 'string', required: false, validity: false},
      {field: 'location', type: 'string', required: false, validity: false},
      {field: 'sumInsured', type: 'number', required: false, validity: false},
      {field: 'primeHt', type: 'number', required: false, validity: false},
      {field: 'commissionPaid', type: 'number', required: false, validity: false},
      {field: 'partAssignor', type: 'number', required: false, validity: false}
    ];
    parsedArray.forEach((data, index) => {
      if (typeof data.__EMPTY_1 === 'number') {
        const rowData = { isValid: true };
        mapper.map((field, id) => {
          if (field) {
            // @ts-ignore
            rowData[field.field] = data['__EMPTY_' + id];
          }
        });
        res.push(rowData);
      }
    });

    return res;
  }
}
