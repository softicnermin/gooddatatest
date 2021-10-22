import React from "react";

import Page from "../components/Page";
import Map from "../components/Map";
import * as Md from "../md/full";
import { newPositiveAttributeFilter } from "@gooddata/sdk-model/esm/index";
import { DashboardView } from "@gooddata/sdk-ui-ext";


const dashboardFilter1 = [ newPositiveAttributeFilter(Md.Category, { uris: [ "Advertising", "Social" ]}) ];

class ExampleDashboard extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            dashboardFilters: dashboardFilter1,
        };
    }

    writeFeature = filtersArray => {
        const dashboardFilters = [ newPositiveAttributeFilter(Md.Category, { uris: filtersArray }) ];

        this.setState({
            dashboardFilters,
        })
    };

    render()
    {
        return <Page>
            <DashboardView
                dashboard={Md.Dashboards.Dashboard1}
                filters={this.state.dashboardFilters}
                isReadOnly
            />
            <div>
                <Map
                    getFeature={this.writeFeature}/>
            </div>
        </Page>;
    }

};

export default ExampleDashboard;
