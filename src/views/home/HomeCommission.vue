<template>
  <b-card class="earnings-card">
    <b-row>
      <b-col cols="6">
        <b-card-title class="mb-1">
          {{ currentGeneration.num_gens }} Max Generations
        </b-card-title>
        <div class="font-small-2">
          Total Earnings
        </div>
        <h5 class="mb-1">
          NGN 0
        </h5>
        <b-card-text class="text-muted font-small-2">
          <span class="font-weight-bolder">{{ 100 - parseInt(currentGeneration.gen_1) }}%</span><span> of earnings is sent to upstream affiliates.</span>
        </b-card-text>
      </b-col>
      <b-col cols="6">
        <!-- chart -->
        <vue-apex-charts
          height="120"
          :options="earningsChart.chartOptions"
          :series="earningsChart.series"
        />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
/* eslint-disable radix */
import {
  BCard, BRow, BCol, BCardTitle, BCardText,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'
import { mapGetters } from 'vuex'
import commission from '@/mixins/commission'

const $earningsStrokeColor1 = '#28c76f99'
const $earningsStrokeColor2 = '#28c76f88'
const $earningsStrokeColor3 = '#28c76f66'
const $earningsStrokeColor4 = '#28c76f44'
export default {
  components: {
    BCard,
    BRow,
    BCol,
    BCardTitle,
    BCardText,
    VueApexCharts,
  },
  mixins: [commission],
  data() {
    const currGen = this.$store.getters['commission/getCurrentGeneration']
    const series = [
      parseInt(currGen.gen_1),
      parseInt(currGen.gen_2),
      parseInt(currGen.gen_3),
      parseInt(currGen.gen_4),
      parseInt(currGen.gen_5),
    ]
    return {
      earningsChart: {
        series,
        chartOptions: {
          chart: {
            type: 'donut',
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: { show: false },
          comparedResult: [2, -3, 8, 3, -2],
          labels: ['Retained', '1st', '2nd', '3rd', '4th'],
          stroke: { width: 0 },
          colors: [$earningsStrokeColor1, $earningsStrokeColor2, $earningsStrokeColor3, $earningsStrokeColor4, $themeColors.success],
          grid: {
            padding: {
              right: -20,
              bottom: -8,
              left: -20,
            },
          },
          plotOptions: {
            pie: {
              startAngle: -10,
              donut: {
                labels: {
                  show: true,
                  name: {
                    offsetY: 15,
                  },
                  value: {
                    offsetY: -15,
                    formatter(val) {
                      // eslint-disable-next-line radix
                      return `${parseInt(val)}%`
                    },
                  },
                  total: {
                    show: true,
                    offsetY: 15,
                    label: 'Retained',
                    formatter() {
                      return `${currGen.gen_1}%`
                    },
                  },
                },
              },
            },
          },
          responsive: [
            {
              breakpoint: 1325,
              options: {
                chart: {
                  height: 100,
                },
              },
            },
            {
              breakpoint: 1200,
              options: {
                chart: {
                  height: 120,
                },
              },
            },
            {
              breakpoint: 1045,
              options: {
                chart: {
                  height: 100,
                },
              },
            },
            {
              breakpoint: 992,
              options: {
                chart: {
                  height: 120,
                },
              },
            },
          ],
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      currentGeneration: 'commission/getCurrentGeneration',
    }),
  },
  created() {
    this.getCommissions()
  },
}
</script>
