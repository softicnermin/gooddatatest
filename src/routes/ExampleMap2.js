import React from "react";

import Page from "../components/Page";
import Map from "../components/Map";
import * as Md from "../md/full";
import { newPositiveAttributeFilter } from "@gooddata/sdk-model/esm/index";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { BarChart } from "@gooddata/sdk-ui-charts";

const filters1 = [
    newPositiveAttributeFilter(Md.Category, ['Advertising', 'Event', 'Social']),
];

class ExampleMap2 extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            filters: filters1,
        };
    }

    writeFeature = filtersArray => {
        const filters = [ newPositiveAttributeFilter(Md.Category, filtersArray)];

        this.setState({
            filters,
        })
    };

    render()
    {
        return <Page>
            <div>
                <div style={{ height: 400 }}>
                    <InsightView
                        insight={Md.Insights.Insight1}
                        filters={this.state.filters}
                    />
                </div>
            </div>
            <div style={{ height: 400 }}>
                <BarChart
                    measures={[Md.Spend.Avg, Md.Spend.Median,Md.Spend.Min ]}
                    viewBy={Md.Category}
                    filters={this.state.filters}
                />
            </div>
            <div>
                <Map
                    getFeature={this.writeFeature}/>
            </div>
        </Page>;
    }

};

export default ExampleMap2;
