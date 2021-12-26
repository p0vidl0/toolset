<script lang="ts">
  import { getWeek } from 'date-fns';
  import { notifications } from '../toast/notifications.js';

  const now = new Date();
  const getWeekNumber = () => getWeek(now, { firstWeekContainsDate: 4 });

  const maxHeaderLength = 25;

  const data = [
    ['Now'.padEnd(maxHeaderLength, '.'), now.toString()],
    ['Now at UTC'.padEnd(maxHeaderLength, '.'), now.toUTCString()],
    ['Now (ISO8601)'.padEnd(maxHeaderLength, '.'), now.toISOString()],
    ['Timestamp'.padEnd(maxHeaderLength, '.'), Math.round(now.getTime() / 1000)],
    ['Timestamp (ms)'.padEnd(maxHeaderLength, '.'), now.getTime()],
    ['Week number'.padEnd(maxHeaderLength, '.'), getWeekNumber()],
  ];

  const copy = (e) => {
    navigator.clipboard.writeText(e.target.outerText);
    notifications.info('Copied', 700);
  };

</script>

<div class="w-full p-4">
    <div>
        <fieldset class="tui-fieldset tui-border-dotted">
            <legend>Date and time</legend>
            Some useful date and time information.
        </fieldset>
    </div>

<!--    <table class="min-w-full divide-y divide-gray-200">-->
<!--        <thead class="bg-gray-50">-->
<!--        <tr>-->
<!--            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameter</th>-->
<!--            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody class="bg-white divide-y divide-gray-200">-->
<!--        {#each data as row}-->
<!--            <tr>-->
<!--                <td class="px-3 py-2 whitespace-nowrap">{row[0]}</td>-->
<!--                <td class="px-6 py-4 whitespace-nowrap">{row[1]}</td>-->
<!--            </tr>-->
<!--        {/each}-->
<!--        </tbody>-->
<!--    </table>-->


    <div class="flex my-4">
        <div class="tui-window uuid-container1 flex-row flex-grow">
            <fieldset class="tui-fieldset">
                <legend class="px-1">Date and time</legend>
                <button class="tui-fieldset-button">
                    <span class="green-255-text">-</span>
                </button>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <ul class="">
                                {#each data as row}
                                    <li class="font-mono cursor-pointer">
                                        {row[0]}: <span class="yellow-255-text" on:click={copy}>{row[1]}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</div>

<style>
</style>
