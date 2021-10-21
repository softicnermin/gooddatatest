import React, { useState } from "react";

import * as Md from '../md/full'
import { BarChart } from "@gooddata/sdk-ui-charts";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { newPositiveAttributeFilter } from "@gooddata/sdk-model";

import Page from "../components/Page";
import Button from "../components/controls/Button";

const filters1 = [
    newPositiveAttributeFilter(Md.Category, ['Advertising', 'Event', 'Social']),
];

const filters2 = [
    newPositiveAttributeFilter(Md.Category, ['Event', 'Social']),
];

const socexFilter = [
    newPositiveAttributeFilter(Md.Category, ['Socex']),
];

const Example = () => {
    const [filters, setFilters] = useState(filters1);
    const [filterValue, setFilterValue] = useState('');

    return <Page>
        <div style={{ height: 400 }}>
            <BarChart
                measures={[Md.Spend.Sum]}
                viewBy={Md.Category}
                filters={filters}
            />
        </div>

        <div style={{ height: 400 }}>
            <InsightView
                insight={Md.Insights.Insight1}
                filters={filters}
            />
        </div>


        <Button onClick={() => setFilters(filters2)}>Filter reset</Button>
        <Button onClick={() => setFilters([])}>Filter reset full</Button>
        <Button onClick={() => setFilters(socexFilter)}>Filter socex</Button>
<hr/>
<p>Filter only</p>
        <input value={filterValue} onChange={e => setFilterValue(e.target.value)}/>
        <Button onClick={() => setFilters([newPositiveAttributeFilter(Md.Category, [filterValue]),])}>Update filter</Button>
    </Page>;
};

export default Example;
