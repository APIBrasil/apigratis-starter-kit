import axios from 'axios'

import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { Component } from "react";

import ComplexTable from "views/admin/instancias/components/Table";

class Instancias extends Component {

  constructor(props) {
    super(props);

    this.state = {
      instances: [],
    };
  }

  async componentDidMount() {

    const user = JSON.parse(localStorage.getItem('user'));

    await axios.get('https://cluster.apigratis.com/api/v2/devices', { headers: { 'Authorization': `Bearer ${user.authorization.token}` } })
    .then((response) => {

        this.setState({ instances: response.data })
        return response.data

    }).catch((error) => {
            
        return error
    })

  }

  render() {

    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid>
          <ComplexTable
            columnsData={[
              {
                Header: "INSTANCIA",
                accessor: "instance",
              },
              {
                Header: "STATUS",
                accessor: "status",
              },
              {
                Header: "ULTIMA ATUALIZAÇÃO",
                accessor: "last_update",
              },
              {
                Header: "AÇÕES",
                accessor: "actions",
              },
            ]}
            tableData={ this.state.instances.map((instance) => {
            
              return {
                instance: instance.device_name,
                status: instance.status,
                last_update: instance.last_activity,
              };
  
            }) }
          />
        </SimpleGrid>
      </Box>
    );
  }
}

export default Instancias;
