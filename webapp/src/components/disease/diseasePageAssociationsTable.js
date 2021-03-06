/* eslint-disable react/no-set-state */
import React, { Component } from 'react';
import { RemoteDataTable } from '../../components/dataTable';

class DiseasePageAssociationsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideExtra: true
    };
    this.handleToggleExtra = this.handleToggleExtra.bind(this);
  }

  handleToggleExtra() {
    this.setState({
      hideExtra: !this.state.hideExtra
    });
  }

  render() {
    const columns = [
      {
        field: 'do_name',
        label: 'Disease Name',
        sortable: true,
      },
      {
        field: 'do_id',
        label: 'DO ID',
        isKey: true,
        sortable: true,
        format: (id) => id + '!'
      },
      {
        field: 'associationType',
        label: 'Association',
        sortable: true,
        hidden: this.state.hideExtra,
      }
    ];
    return (
      <div>
        <div className='checkbox pull-right'>
          <label>
            <input checked={!this.state.hideExtra} onChange={this.handleToggleExtra} type='checkbox' />
            Show addition information
          </label>
        </div>
        <RemoteDataTable columns={columns} url='http://localhost:3000/diseases' />
      </div>
    );
  }
}

DiseasePageAssociationsTable.propTypes = {
};

export default DiseasePageAssociationsTable;
